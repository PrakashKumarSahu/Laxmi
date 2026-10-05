from django.contrib import admin
from .models import Project, Component, ProjectRequest

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'difficulty', 'estimated_price', 'is_available')
    list_filter = ('category', 'difficulty', 'is_available')
    search_fields = ('title', 'description', 'components_included')
    prepopulated_fields = {'slug': ('title',)}

@admin.register(Component)
class ComponentAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'price', 'stock_quantity', 'is_available')
    list_filter = ('category', 'is_available')
    search_fields = ('name', 'description')
    prepopulated_fields = {'slug': ('name',)}

@admin.register(ProjectRequest)
class ProjectRequestAdmin(admin.ModelAdmin):
    list_display = ('id', 'student_name', 'project_title', 'phone', 'college_or_school', 'status', 'created_at')
    list_filter = ('status', 'created_at')
    search_fields = ('student_name', 'phone', 'email', 'college_or_school', 'requirements')
    list_editable = ('status',)
