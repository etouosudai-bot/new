/* public/uv/uv.config.js */
self.__uv$config = {
    prefix: '/uv/service/',
    bare: 'https://bare.benroberts.dev/', // 動作確認済みの安定サーバー
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/uv/uv.handler.js',
    bundle: '/uv/uv.bundle.js',
    config: '/uv/uv.config.js',
    sw: '/uv/uv.sw.js',
};
