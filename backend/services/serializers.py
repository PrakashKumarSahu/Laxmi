from rest_framework import serializers
from .models import Service, RepairEnquiry

class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = '__all__'

class RepairEnquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = RepairEnquiry
        fields = '__all__'
        read_only_fields = ('id', 'status', 'created_at')
