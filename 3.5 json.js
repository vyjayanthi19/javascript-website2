+<!DOCTYPE html>
+<html>
+  <body>
+    <h2>Q5 Accessing JSON obj with . notation</h2>
+    <p id="demo"></p>
+
+    <script>
+      const myJSON = '{"name":"John", "age":30, "car":null}';
+      const myObj = JSON.parse(myJSON);
+      document.getElementById("demo").innerHTML = myObj.name;
+    </script>
+  </body>
+</html>