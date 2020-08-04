from django.urls import path
from .views import WeatherDetailView, WeatherListView


urlpatterns = [
    path('', WeatherListView.as_view()),
    path('<pk>', WeatherDetailView.as_view()),
]
