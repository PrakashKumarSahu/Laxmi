from django.contrib import admin
from .models import Service, RepairEnquiry

@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ('name', 'price_range', 'turnaround_time', 'is_active', 'created_at')
    list_filter = ('is_active',)
    search_fields = ('name', 'short_description', 'full_description')
    prepopulated_fields = {'slug': ('name',)}

@admin.register(RepairEnquiry)
class RepairEnquiryAdmin(admin.ModelAdmin):
    list_display = ('id', 'customer_name', 'phone', 'device_type', 'status', 'created_at')
    list_filter = ('status', 'device_type', 'created_at')
    search_fields = ('customer_name', 'phone', 'email', 'issue_description')
    list_editable = ('status',)
