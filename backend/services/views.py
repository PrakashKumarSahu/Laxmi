from rest_framework import viewsets, generics, permissions
from .models import Service, RepairEnquiry
from .serializers import ServiceSerializer, RepairEnquirySerializer
from laxmi.throttling import EnquiryRateThrottle

class ServiceViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Service.objects.filter(is_active=True)
    serializer_class = ServiceSerializer
    lookup_field = 'slug'

class RepairEnquiryCreateView(generics.CreateAPIView):
    queryset = RepairEnquiry.objects.all()
    serializer_class = RepairEnquirySerializer
    permission_classes = [permissions.AllowAny]
    throttle_classes = [EnquiryRateThrottle]