#include "../include/cpp_code.h"
#include <napi.h>

class MyNativeAddon : public Napi::ObjectWrap<MyNativeAddon> {
public:
  static Napi::Object Init(Napi::Env env, Napi::Object exports) {
    Napi::Function func =
        DefineClass(env, "MyNativeAddon",
                    {InstanceMethod("watchTray", &MyNativeAddon::WatchTray)});

    exports.Set("MyNativeAddon", func);
    return exports;
  }

  MyNativeAddon(const Napi::CallbackInfo &info)
      : Napi::ObjectWrap<MyNativeAddon>(info) {}

private:
  Napi::Value WatchTray(const Napi::CallbackInfo &info) {
    cpp_code::WatchTray();
    return info.Env().Undefined();
  }
};

Napi::Object Init(Napi::Env env, Napi::Object exports) {
  return MyNativeAddon::Init(env, exports);
}

NODE_API_MODULE(cpp_addon, Init)
