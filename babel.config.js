module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            // [
            //     "auto-import", {
            //         "declarations": [
            //             { "default": "React", "path": "react" }
            //         ]
            //     }
            // ]
            [
                "module-resolver", {
                    "extensions": [
                        ".js", "tsx", "ts",
                    ],
                    "root": ["."],
                    "alias": {
                        "components": "./src/components"
                    }
                }
            ]
        ]
    };
};
