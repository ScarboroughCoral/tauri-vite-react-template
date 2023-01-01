import * as $protobuf from "protobufjs";
/** Properties of a Greet. */
export interface IGreet {

    /** Greet name */
    name: string;
}

/** Represents a Greet. */
export class Greet implements IGreet {

    /**
     * Constructs a new Greet.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGreet);

    /** Greet name. */
    public name: string;

    /**
     * Creates a new Greet instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Greet instance
     */
    public static create(properties?: IGreet): Greet;

    /**
     * Encodes the specified Greet message. Does not implicitly {@link Greet.verify|verify} messages.
     * @param message Greet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGreet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Greet message, length delimited. Does not implicitly {@link Greet.verify|verify} messages.
     * @param message Greet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGreet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Greet message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Greet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Greet;

    /**
     * Decodes a Greet message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Greet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Greet;

    /**
     * Verifies a Greet message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Greet message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Greet
     */
    public static fromObject(object: { [k: string]: any }): Greet;

    /**
     * Creates a plain object from a Greet message. Also converts values to other types if specified.
     * @param message Greet
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Greet, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Greet to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GreetCallback. */
export interface IGreetCallback {

    /** GreetCallback message */
    message: string;
}

/** Represents a GreetCallback. */
export class GreetCallback implements IGreetCallback {

    /**
     * Constructs a new GreetCallback.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGreetCallback);

    /** GreetCallback message. */
    public message: string;

    /**
     * Creates a new GreetCallback instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GreetCallback instance
     */
    public static create(properties?: IGreetCallback): GreetCallback;

    /**
     * Encodes the specified GreetCallback message. Does not implicitly {@link GreetCallback.verify|verify} messages.
     * @param message GreetCallback message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGreetCallback, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GreetCallback message, length delimited. Does not implicitly {@link GreetCallback.verify|verify} messages.
     * @param message GreetCallback message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGreetCallback, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GreetCallback message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GreetCallback
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GreetCallback;

    /**
     * Decodes a GreetCallback message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GreetCallback
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GreetCallback;

    /**
     * Verifies a GreetCallback message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GreetCallback message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GreetCallback
     */
    public static fromObject(object: { [k: string]: any }): GreetCallback;

    /**
     * Creates a plain object from a GreetCallback message. Also converts values to other types if specified.
     * @param message GreetCallback
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GreetCallback, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GreetCallback to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
