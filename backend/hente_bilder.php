<?php
    $servername = "192.168.0.106";
    $username = "bild";
    $password = "Bilder1!";
    $dbname = "bilder";

    function hent_db() {

        $app_info = array();

        // Create connection
        $conn = new mysqli($servername, $username, $password, $dbname);
        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        } 

        $sql = "SELECT id, src, title FROM bilder";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            // output data of each row
            while($row = $result->fetch_assoc()) {
              $bilder = array($row["src"], $row["title"])
              return($bilder);
            }
        } else {
            echo "0 results";
        }
        $conn->close();
    }
    hent_db();
    echo $bilder;
?>