# Create your models here.
from allauth.account.signals import user_signed_up
from django.conf import settings
from django.contrib.auth.models import User
from django.core.mail import send_mail


def user_signed_up_(request, user, **kwargs):
    send_mail(
        subject="Welcome Greetings",
        message="Welcome to my Store. Explore the store and enjoy",
        from_email=settings.DEFAULT_FROM_EMAIL,
        recipient_list=[user.email],
        fail_silently=False
    )


user_signed_up.connect(user_signed_up_, sender=User)
