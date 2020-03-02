<script>
    function convert(degree) {
      var x;
      if (degree == "C") {
        x = document.getElementById("c").value + 273.15;
        document.getElementById("f").value = x;
      }
    }
    </script>
