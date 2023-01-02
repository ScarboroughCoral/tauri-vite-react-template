#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]
use std::borrow::Cow;

use tauri::Manager;
// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
use protobuf::proto;
use protobuf::quick_protobuf::{BytesReader, MessageRead, Writer};
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
fn greet_protobuf<'a>(greet: Vec<u8>) -> Cow<'a,[u8]> {
    let mut reader = BytesReader::from_bytes(&greet);
    let greet = proto::hello::Greet::from_reader(&mut reader, &greet).unwrap();
    let mut result = vec![];
    let mut writer = Writer::new(&mut result);
    let greet_callback_message = format!("Hello, {}! You've been greeted with protobuf from Rust!", greet.name);
    let greet_callback = proto::hello::GreetCallback {
        message : Cow::from(greet_callback_message)
    };
    // FIXME quick-protobuf 会将长度序列化到二进制序列开头 https://github.com/tafia/quick-protobuf/issues/202
    writer.write_message(&greet_callback).unwrap();
    result.into()
}


fn main() {
    tauri::Builder::default()
        .setup(|app| {
            #[cfg(debug_assertions)]
            {
                let window = app.get_window("main").unwrap();
                window.open_devtools();
            }
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![greet, greet_protobuf])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
