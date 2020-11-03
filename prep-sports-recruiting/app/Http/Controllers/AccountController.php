<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Plan;
use App\Sport;
use App\Coach;
use GuzzleHttp\ClientInterface;
use Chocoholics\LaravelElasticEmail\ElasticTransport;
use GuzzleHttp\Client as Client;
use GuzzleHttp\Exception\ClientException;
use GuzzleHttp\Handler\MockHandler;
use GuzzleHttp\HandlerStack;
use GuzzleHttp\Psr7;
use GuzzleHttp\Psr7\Response;
use GuzzleHttp\Exception\RequestException;
use Psr\Http\Message\ResponseInterface;


class AccountController extends Controller
{
    public function getAccountData(Request $request)
    {
        $user = User::where('id', '=', $request->id)->first();
        $plans = $user->plans()->get();
        $data = new \stdClass();
        $data->user_name = $user->name;
        $data->user_email = $user->email;
        $data->user_birthday = $user->birthday;
        $data->user_country = $user->country;
        $data->plans = $plans;

        return response()->json(['msg' => 'Account data', 'data' => $data, 'status' => 'Successeful']);
    }

    /**
     * @param  \Illuminate\Http\Request  $request (user_id, sport_id, plan_id)
     * @return \Illuminate\Contracts\Validation\Validator
     */
    public function getCoaches(Request $request) {
        $user = User::where('id', '=', $request->id)->first();
        $sport = Sport::findOrFail($request->sport_id);
        $selectedPlan = Plan::findOrFail($request->plan_id);
        $userPlans = $user->plans;
        if ($userPlans->isNotEmpty()) {
            foreach ($userPlans as $plan){
                if ($plan->pivot->sport_id == $sport->id && $plan->pivot->count < $selectedPlan->term) {
                    $coaches = $sport->coaches;
                    return response()->json(['msg' => 'Coaches', 'data'=>$coaches, 'status' => 'Successeful']);
                }
            }
        }
        return response()->json(['msg' => 'No Coaches', 'status' => 'error']);
    }

    public function getLog(Request $request) {
        $client = new Client([
            'headers' => [
                'Content-type' => 'application/json; charset=utf-8'
            ],
        ]);
        $url = 'https://api.elasticemail.com/v2/log/load?apikey='. env('ELASTIC_KEY') . '&statuses=5&from=2020-10-01T01:01:01&to=2020-10-21T17:25:25&limit=5&includeEmail=true&email=';

        try {
            $request = $client->post($url, []);
        } catch (ClientException $e) {
            if ($e->hasResponse()) {
                dd(Psr7\str($e->getResponse()));
            }
        }

        return $request;

    }
}
