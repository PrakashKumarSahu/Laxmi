from rest_framework import serializers
from .models import Product, PurchaseEnquiry

class ProductSerializer(serializers.ModelSerializer):
    category_display = serializers.CharField(source='get_category_display', read_only=True)
    condition_display = serializers.CharField(source='get_condition_display', read_only=True)

    class Meta:
        model = Product
        fields = '__all__'

class PurchaseEnquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = PurchaseEnquiry
        fields = '__all__'
        read_only_fields = ('id', 'status', 'created_at')
