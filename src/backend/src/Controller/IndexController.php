<?php
namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class IndexController
{
    #[Route('/', methods: ['GET'])]
    public function index()
    {
        return new Response(
            '<html><body>Playmodoro media API</body></html>'
        );
    }
}