# AngularCryptojs

# Search endpoint routine LUMEN

/http/controllers/authorControllor.php

public function searchAuthor($email) {

        $results = DB::select("
        select * FROM authors WHERE email = '{$email}'
        ");
        return json_encode($results);
    }

/routes/web.php

$router->get('authors/search/{email}', ['uses' => 'App\Http\Controllers\AuthorController@searchAuthor']);