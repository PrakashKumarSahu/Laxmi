from django.urls import path
from . import views

urlpatterns = [
    path('', views.products, name='products'),  # Default route to products view
]