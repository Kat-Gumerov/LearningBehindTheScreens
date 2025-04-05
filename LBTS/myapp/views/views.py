from django.shortcuts import render, HttpResponse
from openai import OpenAI
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
import json

# Homepage View
def home(request):
    return HttpResponse("Hello, welcome to Learning Behind The Screens!")

@csrf_exempt
def explainCode(request):
    if request.method == 'POST':
        try:
           
            data = json.loads(request.body.decode('utf-8'))
            snippet = data.get('snippet', '')

           
            client = OpenAI(api_key=settings.OPEN_API_KEY)

            response = client.chat.completions.create(
                model="gpt-3.5-turbo",
                messages=[
                    {
                        "role": "system",
                        "content": (
                           "You are a helpful assistant who explains code to children. "
                           "You will be given snippets of python pseudocode to explain"
                            "Use simple words, keep answers one sentence only, fun, and engaging. "
                            "Start the explanation directly — do not say 'Sure!', 'Of course!', or any greeting. "
                            "Just explain the code in a way a 12-year-old would understand."
                        )
                    },
                    {
                        "role": "user",
                        "content": f"Explain this code to a 12-year-old:\n\n{snippet}"
                    },
                ],
                temperature=0.5,
                max_tokens=1000
            )

            explanation = response.to_dict()["choices"][0]["message"]["content"]

            return JsonResponse({"explanation": explanation})
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)
    return JsonResponse({"error": "Invalid request method."}, status=405)

