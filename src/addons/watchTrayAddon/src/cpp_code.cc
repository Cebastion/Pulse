#include "../include/cpp_code.h"
#include <string>

namespace cpp_code {
std::string hello_world(const std::string &input) {
  // Simply concatenate strings and return
  return "Hello from C++! You said: " + input;
}
} // namespace cpp_code
