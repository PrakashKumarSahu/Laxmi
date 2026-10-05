from rest_framework import viewsets, generics, permissions, filters
from .models import Product, PurchaseEnquiry
from .serializers import ProductSerializer, PurchaseEnquirySerializer
from laxmi.throttling import EnquiryRateThrottle

class ProductViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Product.objects.filter(is_available=True)
    serializer_class = ProductSerializer
    lookup_field = 'slug'
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['name', 'description', 'category']

    def get_queryset(self):
        queryset = super().get_queryset()
        category = self.request.query_params.get('category')
        condition = self.request.query_params.get('condition')
        if category:
            queryset = queryset.filter(category=category)
        if condition:
            queryset = queryset.filter(condition=condition)
        return queryset

class PurchaseEnquiryCreateView(generics.CreateAPIView):
    queryset = PurchaseEnquiry.objects.all()
    serializer_class = PurchaseEnquirySerializer
    permission_classes = [permissions.AllowAny]
    throttle_classes = [EnquiryRateThrottle]