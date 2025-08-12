from django.shortcuts import render, HttpResponse
from openai import OpenAI
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
from django.http import JsonResponse
import json
import logging

logger = logging.getLogger('django')

# Homepage View
def home(request):
    return HttpResponse("Hello, welcome to Learning Behind The Screens!")

@csrf_exempt
@require_http_methods(["POST", "OPTIONS"])
def explainCode(request):
    # Handle preflight OPTIONS request
    if request.method == "OPTIONS":
        response = JsonResponse({})
        response["Access-Control-Allow-Origin"] = "*"
        response["Access-Control-Allow-Methods"] = "POST, OPTIONS"
        response["Access-Control-Allow-Headers"] = "Content-Type, Authorization"
        return response
    
    logger.info("hello")
    if request.method == 'POST':
        try:
            data = json.loads(request.body.decode('utf-8'))
            snippet = data.get('snippet', '')
            game = data.get('game', '')

            client = OpenAI(api_key=settings.OPEN_API_KEY)

            response = client.chat.completions.create(
                model="gpt-3.5-turbo",
                messages=[
                    {
                        "role": "system",
                        "content": (
                           "You are a helpful assistant who explains code to people. "
                           "You will be given snippets of python pseudocode to explain. This will be code pertaining to rock paper scissors, hangman, or tic tac toe. So use that as context"
                            "Use simple words, keep answers one sentence only, fun, and engaging especially for younger people who don't have experience coding. "
                            "Start the explanation directly — do not say 'Sure!', 'Of course!', or any greeting. Do not say what the game is, the user knows what game it is"
                        )
                    },
                    {
                        "role": "user",
                        "content": f"Explain this code for {game} to a younger person who doesn't have experience coding:\n\n{snippet}"
                    },
                ],
                temperature=0.5,
                max_tokens=1000
            )

            explanation = response.to_dict()["choices"][0]["message"]["content"]

            # Create response with CORS headers
            json_response = JsonResponse({"explanation": explanation})
            json_response["Access-Control-Allow-Origin"] = "*"
            return json_response
            
        except Exception as e:
            logger.info("error: ", e)
            error_response = JsonResponse({"error": str(e)}, status=500)
            error_response["Access-Control-Allow-Origin"] = "*"
            return error_response
    
    error_response = JsonResponse({"error": "Invalid request method."}, status=405)
    error_response["Access-Control-Allow-Origin"] = "*"
    return error_response