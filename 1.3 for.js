<!DOCTYPE html>
+<html>
+  <body>
+    <h2>Q3 For/In Loop</h2>
+    <p>The for in statement loops through the properties of an object:</p>
+
+    <p id="demo"></p>
+
+    <script>
+      const person = { fname: "Rahul", lname: "Koppula", age: 21 };
+
+      let txt = "";
+      for (let x in person) {
+        // for in loop is used here, it loops through the key and value of the variables
+        txt += person[x] + " ";
+      }
+
+      document.getElementById("demo").innerHTML = txt;
+    </script>
+  </body>