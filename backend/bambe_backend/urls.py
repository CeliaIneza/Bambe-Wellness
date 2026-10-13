from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from core.views import (
    SupportRequestViewSet,
    ContactMessageViewSet,
    CheckInSubmissionViewSet,
    ResourceArticleViewSet,
    TeamMemberViewSet,
    FAQViewSet,
)

router = DefaultRouter()
router.register(r'support-requests', SupportRequestViewSet)
router.register(r'contact', ContactMessageViewSet)
router.register(r'check-in', CheckInSubmissionViewSet)
router.register(r'resources', ResourceArticleViewSet)
router.register(r'team', TeamMemberViewSet)
router.register(r'faqs', FAQViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
