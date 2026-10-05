from rest_framework import viewsets, generics, permissions, filters
from .models import Project, Component, ProjectRequest
from .serializers import ProjectSerializer, ComponentSerializer, ProjectRequestSerializer
from laxmi.throttling import EnquiryRateThrottle

class ProjectViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Project.objects.filter(is_available=True)
    serializer_class = ProjectSerializer
    lookup_field = 'slug'
    filter_backends = [filters.SearchFilter]
    search_fields = ['title', 'description', 'components_included']

    def get_queryset(self):
        queryset = super().get_queryset()
        category = self.request.query_params.get('category')
        if category:
            queryset = queryset.filter(category=category)
        return queryset

class ComponentViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Component.objects.filter(is_available=True)
    serializer_class = ComponentSerializer
    lookup_field = 'slug'
    filter_backends = [filters.SearchFilter]
    search_fields = ['name', 'category', 'description']

class ProjectRequestCreateView(generics.CreateAPIView):
    queryset = ProjectRequest.objects.all()
    serializer_class = ProjectRequestSerializer
    permission_classes = [permissions.AllowAny]
    throttle_classes = [EnquiryRateThrottle]