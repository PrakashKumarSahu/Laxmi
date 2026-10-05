from django.db import models

class Product(models.Model):
    CATEGORY_CHOICES = [
        ('DTH', 'DTH Receiver'),
        ('TV', 'LED TV'),
        ('MIXER', 'Mixer Grinder'),
        ('FAN', 'Fan'),
        ('COOLER', 'Cooler'),
        ('INDUCTION', 'Induction Cooker'),
        ('ACCESSORY', 'Electronics Accessory'),
        ('OTHER', 'Other'),
    ]

    CONDITION_CHOICES = [
        ('NEW', 'New Product'),
        ('REFURBISHED', 'Refurbished Product'),
        ('WHOLESALE', 'Wholesale Bulk Product'),
    ]

    name = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES, default='OTHER')
    condition = models.CharField(max_length=20, choices=CONDITION_CHOICES, default='NEW')
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    wholesale_price = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    wholesale_min_qty = models.PositiveIntegerField(default=10)
    stock_quantity = models.PositiveIntegerField(default=1)
    is_available = models.BooleanField(default=True)
    image_url = models.URLField(blank=True, default='', help_text="External or placeholder image URL")
    image = models.ImageField(upload_to='products/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.name} ({self.get_condition_display()})"


class PurchaseEnquiry(models.Model):
    STATUS_CHOICES = [
        ('PENDING', 'Pending'),
        ('CONTACTED', 'Contacted'),
        ('CONFIRMED', 'Confirmed'),
        ('CANCELLED', 'Cancelled'),
    ]

    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True, blank=True, related_name='enquiries')
    product_name = models.CharField(max_length=200)
    customer_name = models.CharField(max_length=150)
    phone = models.CharField(max_length=20)
    email = models.EmailField(blank=True)
    quantity = models.PositiveIntegerField(default=1)
    is_wholesale = models.BooleanField(default=False)
    delivery_address = models.TextField(blank=True)
    message = models.TextField(blank=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='PENDING')
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']
        verbose_name_plural = "Purchase Enquiries"

    def __str__(self):
        return f"Order Enquiry #{self.id} - {self.customer_name} ({self.product_name})"
