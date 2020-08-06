from django.urls import path
from . import views


urlpatterns = [
    path('', views.apiOverview, name='api-overview'),
    path('forecast-list/', views.forecastList, name='forecast-list'),
    path('forecast-detail/<str:pk>/', views.forecastDetail, name='forecast-detail'),
]   # might not need the details since we are only ever looking at one city