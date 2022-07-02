<!DOCTYPE html>
+<html>
+  <body>
+    <p>
+      Q6 Demonstarting that use strict will throw an error when variable is not
+      declared
+    </p>
+
+    <script>
+      x = 3; // This will not cause an error as it is out of the function block
+      myFunction();
+
+      function myFunction() {
+        "use strict";
+        y = 4; // This will cause an error as y is not defined.
+      }
+    </script>
+  </body>
+</html>