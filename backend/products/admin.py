from django.contrib import admin
from .models import Product, PurchaseEnquiry

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'condition', 'price', 'wholesale_price', 'stock_quantity', 'is_available')
    list_filter = ('category', 'condition', 'is_available')
    search_fields = ('name', 'description')
    prepopulated_fields = {'slug': ('name',)}

@admin.register(PurchaseEnquiry)
class PurchaseEnquiryAdmin(admin.ModelAdmin):
    list_display = ('id', 'customer_name', 'product_name', 'phone', 'quantity', 'is_wholesale', 'status', 'created_at')
    list_filter = ('status', 'is_wholesale', 'created_at')
    search_fields = ('customer_name', 'product_name', 'phone', 'email')
    list_editable = ('status',)
