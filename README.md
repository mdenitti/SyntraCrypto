# AngularCryptojs

## Search endpoint routine LUMEN

/http/controllers/authorControllor.php

```sh
public function searchAuthor($email) {

        $results = DB::select("
        select * FROM authors WHERE email = '{$email}'
        ");
        return json_encode($results);
    }
```

/routes/web.php

```sh
$router->get('authors/search/{email}', ['uses' => 'App\Http\Controllers\AuthorController@searchAuthor']);
```
## Let op met de mass assignement in het lumen model

/app/author.php

De protected $fillable = ['name','email','etc...'] moet alle colums bevatten die je wilt invullen via een post request. Als alternatief kan je ook alles invulbaar maken met een door de $fillable te vervangen met protected $guardes = [];

```sh
<?php
namespace App;
use Illuminate\Database\Eloquent\Model;

class Author extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $guarded = [];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];
}
```