from django.urls import path
from .views import views, logging


urlpatterns = [
  path("", views.home, name = "home"),
  path("explain-code/", views.explainCode, name = 'explainCode'),
  path("log-event/", logging.logEvent, name = 'logEvent')
]