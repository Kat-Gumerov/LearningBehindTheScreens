import json
import logging
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from datetime import datetime


logger = logging.getLogger('justLog')
logger.setLevel(logging.INFO)

fileHandle = logging.FileHandler('usage.log')

formatter = logging.Formatter(fmt="%(asctime)s - %(levelname)s - %(message)s", datefmt="%Y-%m-%d %H:%M:%S", style='%')

fileHandle.setFormatter(formatter)
logger.addHandler(fileHandle)

@csrf_exempt
def logEvent(request):
  if request.method == 'POST':
    try:
      data = json.loads(request.body.decode('utf-8'))
      event_type = data.get('event_type', 'unknown')
      details = data.get('details', {})

            # Build a structured log entry
      log_entry = {
                "timestamp": datetime.utcnow().isoformat(),
                "event_type": event_type,
                "details": details
            }

            # Write the log entry as JSON
      logger.info(json.dumps(log_entry))

      return JsonResponse({"status": "success", "message": "Event logged."})
    except Exception as e:
            return JsonResponse({"status": "error", "message": str(e)}, status=400)
    else:
      return JsonResponse({"status": "error", "message": "Invalid request method."}, status=405)

