#include "../include/cpp_code.h"
#include <dbus/dbus.h>
#include <iostream>

namespace cpp_code {

void WatchTray() {
  DBusError error;
  dbus_error_init(&error);

  DBusConnection *connection = dbus_bus_get(DBUS_BUS_SESSION, &error);

  if (dbus_error_is_set(&error)) {
    std::cerr << "DBus error: " << error.message << std::endl;
    dbus_error_free(&error);
    return;
  }

  dbus_bus_add_match(connection,
                     "type='signal',interface='org.kde.StatusNotifierWatcher'",
                     &error);

  dbus_connection_flush(connection);

  std::cout << "Listening for tray signals...\n";

  while (true) {
    dbus_connection_read_write(connection, 100);
    DBusMessage *msg = dbus_connection_pop_message(connection);

    if (!msg)
      continue;

    const char *member = dbus_message_get_member(msg);

    if (member) {
      std::cout << "Signal: " << member << std::endl;
    }

    dbus_message_unref(msg);
  }

  dbus_connection_unref(connection);
}

} // namespace cpp_code
