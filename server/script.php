<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
    require_once __DIR__ . '/vendor/autoload.php';
    use MongoDB\Client;
    use MongoDB\Driver\ServerApi;
    use Dotenv\Dotenv;

    // Load environment variables
    $dotenv = Dotenv::createImmutable(__DIR__);
    $dotenv->load();

    // Fetch MongoDB URI from the environment variable
    $uri = getenv('MONGODB_URI');

    // Set the version of the Stable API on the client
    $apiVersion = new ServerApi(ServerApi::V1);

    // Create a new MongoDB client and connect to the server
    $client = new MongoDB\Client($uri, [], ['serverApi' => $apiVersion]);

    try {
        // Send a ping to confirm a successful connection
        $client->selectDatabase('admin')->command(['ping' => 1]);
        echo "Pinged your deployment. You successfully connected to MongoDB!";
    } catch (Exception $e) {
        // If there's an error, print the error message
        echo "Connection failed: " . $e->getMessage();
    }
?>


</body>
</html>