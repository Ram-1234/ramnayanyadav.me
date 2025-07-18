<?php
   header('access-control-allow-origin: http://localhost:3000');
   header('access-control-allolw-headers: *');
   header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
   header("Access-Control-Allow-Credentials: true");
   $name = $_POST['name'] ?? '';
   echo ("hello my name is: $name");

    //    include('./db_connect.php');
    //    $db= new DbConnect();
    //    $conn=$db->connect();

    //    $method = $_SERVER['REQUEST_METHOD'];

    //    switch($method) {
    //        case 'GET':
    //            $query = "SELECT * FROM users";
    //            $stmt = $conn->prepare($query);
    //            $stmt->execute();
    //            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    //            echo json_encode($result);
    //            break;

    //        case 'POST':
    //            $data = json_decode(file_get_contents("php://input"), true);
    //            $query = "INSERT INTO users (name, email) VALUES (:name, :email)";
    //            $stmt = $conn->prepare($query);
    //            $stmt->bindParam(':name', $data['name']);
    //            $stmt->bindParam(':email', $data['email']);
    //            if ($stmt->execute()) {
    //                echo json_encode(['message' => 'User created successfully']);
    //            } else {
    //                echo json_encode(['message' => 'Failed to create user']);
    //            }
    //            break;

    //        default:
    //            echo json_encode(['message' => 'Method not allowed']);
    //    }

?>