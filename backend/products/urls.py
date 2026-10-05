from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProductViewSet, PurchaseEnquiryCreateView

router = DefaultRouter()
router.register(r'products', ProductViewSet, basename='product')

urlpatterns = [
    path('products/enquiry/', PurchaseEnquiryCreateView.as_view(), name='purchase-enquiry'),
    path('', include(router.urls)),
]