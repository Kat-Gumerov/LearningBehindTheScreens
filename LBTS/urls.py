from django.contrib import admin
from django.urls import path
from myapp.views import views
from myapp.views import logging

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home, name='home'),
    path('api/explain-code/', views.explainCode, name='explainCode'),
    path('log-event/', logging.logEvent, name='logEvent'),
]