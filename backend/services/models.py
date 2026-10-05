from django.db import models

class Service(models.Model):
    name = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    icon_name = models.CharField(max_length=50, default='Wrench', help_text="Lucide icon name e.g. Wrench, Tv, Fan, Cpu, Zap")
    short_description = models.CharField(max_length=255)
    full_description = models.TextField()
    price_range = models.CharField(max_length=100, help_text="e.g. ₹200 - ₹800")
    turnaround_time = models.CharField(max_length=100, default="1-2 Days")
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['name']

    def __str__(self):
        return self.name


class RepairEnquiry(models.Model):
    STATUS_CHOICES = [
        ('PENDING', 'Pending'),
        ('IN_PROGRESS', 'In Progress'),
        ('COMPLETED', 'Completed'),
        ('CANCELLED', 'Cancelled'),
    ]

    customer_name = models.CharField(max_length=150)
    phone = models.CharField(max_length=20)
    email = models.EmailField(blank=True)
    device_type = models.CharField(max_length=100)
    issue_description = models.TextField()
    preferred_date = models.DateField(null=True, blank=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='PENDING')
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']
        verbose_name_plural = "Repair Enquiries"

    def __str__(self):
        return f"Repair #{self.id} - {self.customer_name} ({self.device_type})"
