from rest_framework import generics, permissions
from .models import ContactMessage
from .serializers import ContactMessageSerializer
from laxmi.throttling import EnquiryRateThrottle

class ContactMessageCreateView(generics.CreateAPIView):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer
    permission_classes = [permissions.AllowAny]
    throttle_classes = [EnquiryRateThrottle]