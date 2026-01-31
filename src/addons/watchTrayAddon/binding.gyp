{
  "targets": [
    {
      "target_name": "cpp_addon",
      "conditions": [
        ['OS=="linux"', {
          "sources": [
            "./src/cpp_addon.cc",
            "./src/cpp_code.cc"
          ],
          "include_dirs": [
            "<!@(node -p \"require('node-addon-api').include\")",
            "include",
            "<!@(pkg-config --cflags-only-I gtk+-3.0 | sed s/-I//g)",
            "<!(pkg-config --cflags-only-I dbus-1 | sed s/-I//g)"
          ],
          "libraries": [
            "<!@(pkg-config --libs gtk+-3.0)",
            "-luuid",
            "<!@(pkg-config --libs dbus-1)"
          ],
          "cflags": [
            "-fexceptions",
            "<!@(pkg-config --cflags gtk+-3.0)",
            "-pthread"
          ],
          "cflags_cc": [
            "-fexceptions",
            "<!@(pkg-config --cflags gtk+-3.0)",
            "-pthread"
          ],
          "ldflags": [
            "-pthread",
          ],
          "cflags!": ["-fno-exceptions"],
          "cflags_cc!": ["-fno-exceptions"],
          "defines": ["NODE_ADDON_API_CPP_EXCEPTIONS"],
          "dependencies": [
            "<!(node -p \"require('node-addon-api').gyp\")"
          ]
        }]
      ]
    }
  ]
}
