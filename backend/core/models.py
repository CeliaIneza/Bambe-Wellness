from django.db import models

class SupportRequest(models.Model):
    CONTACT_CHOICES = [
        ('in_person', 'In Person'),
        ('phone', 'Phone Call'),
        ('video', 'Video Call'),
        ('chat', 'Text Chat'),
    ]
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('contacted', 'Contacted'),
        ('resolved', 'Resolved'),
    ]

    name = models.CharField(max_length=150)
    email = models.EmailField()
    phone = models.CharField(max_length=50, blank=True)
    preferred_contact = models.CharField(max_length=30, choices=CONTACT_CHOICES, default='phone')
    topics = models.JSONField(default=list, blank=True)
    message = models.TextField(blank=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Support Request from {self.name} ({self.preferred_contact})"


class ContactMessage(models.Model):
    name = models.CharField(max_length=150)
    email = models.EmailField()
    phone = models.CharField(max_length=50, blank=True)
    reason = models.CharField(max_length=50, default='general')
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Contact from {self.name} - {self.reason}"


class CheckInSubmission(models.Model):
    score = models.IntegerField()
    category = models.CharField(max_length=50)  # low, moderate, high
    responses = models.JSONField(default=dict)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"CheckIn Submission Score {self.score} ({self.category})"


class ResourceArticle(models.Model):
    slug = models.SlugField(unique=True)
    title_en = models.CharField(max_length=255)
    title_rw = models.CharField(max_length=255)
    category = models.CharField(max_length=100)
    description_en = models.TextField()
    description_rw = models.TextField()
    content_en = models.TextField()
    content_rw = models.TextField()
    read_time = models.CharField(max_length=50, default="5 min read")
    is_featured = models.BooleanField(default=False)
    published_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title_en


class TeamMember(models.Model):
    name = models.CharField(max_length=150)
    title_en = models.CharField(max_length=150)
    title_rw = models.CharField(max_length=150)
    qualifications = models.CharField(max_length=255)
    expertise_en = models.CharField(max_length=255)
    expertise_rw = models.CharField(max_length=255)
    languages = models.CharField(max_length=150, default="English, Kinyarwanda")
    bio_en = models.TextField()
    bio_rw = models.TextField()
    registration = models.CharField(max_length=255, blank=True)
    order = models.IntegerField(default=0)

    def __str__(self):
        return self.name


class FAQ(models.Model):
    question_en = models.TextField()
    question_rw = models.TextField()
    answer_en = models.TextField()
    answer_rw = models.TextField()
    category = models.CharField(max_length=50, default="general")
    order = models.IntegerField(default=0)

    def __str__(self):
        return self.question_en[:50]
