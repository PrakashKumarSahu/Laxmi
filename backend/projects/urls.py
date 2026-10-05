from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProjectViewSet, ComponentViewSet, ProjectRequestCreateView

router = DefaultRouter()
router.register(r'projects', ProjectViewSet, basename='project')
router.register(r'components', ComponentViewSet, basename='component')

urlpatterns = [
    path('projects/request/', ProjectRequestCreateView.as_view(), name='project-request'),
    path('', include(router.urls)),
]