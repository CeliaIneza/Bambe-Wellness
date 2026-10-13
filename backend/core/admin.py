from django.contrib import admin
from .models import SupportRequest, ContactMessage, CheckInSubmission, ResourceArticle, TeamMember, FAQ

@admin.register(SupportRequest)
class SupportRequestAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'phone', 'preferred_contact', 'status', 'created_at')
    list_filter = ('status', 'preferred_contact', 'created_at')
    search_fields = ('name', 'email', 'phone', 'message')

@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'reason', 'created_at')
    list_filter = ('reason', 'created_at')
    search_fields = ('name', 'email', 'message')

@admin.register(CheckInSubmission)
class CheckInSubmissionAdmin(admin.ModelAdmin):
    list_display = ('id', 'score', 'category', 'created_at')
    list_filter = ('category', 'created_at')

@admin.register(ResourceArticle)
class ResourceArticleAdmin(admin.ModelAdmin):
    list_display = ('title_en', 'category', 'is_featured', 'published_at')
    list_filter = ('category', 'is_featured')
    search_fields = ('title_en', 'title_rw', 'description_en')
    prepopulated_fields = {'slug': ('title_en',)}

@admin.register(TeamMember)
class TeamMemberAdmin(admin.ModelAdmin):
    list_display = ('name', 'title_en', 'order')
    ordering = ('order',)

@admin.register(FAQ)
class FAQAdmin(admin.ModelAdmin):
    list_display = ('question_en', 'category', 'order')
    ordering = ('order',)
