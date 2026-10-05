from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ServiceViewSet, RepairEnquiryCreateView

router = DefaultRouter()
router.register(r'services', ServiceViewSet, basename='service')

urlpatterns = [
    path('services/enquiry/', RepairEnquiryCreateView.as_view(), name='repair-enquiry'),
    path('', include(router.urls)),
]