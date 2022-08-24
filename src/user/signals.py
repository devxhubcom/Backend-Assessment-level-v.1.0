from allauth.account.signals import user_signed_up
from django.conf import settings
from django.contrib.auth.models import User
from django.core.mail import send_mail
from django.db.models.signals import post_save
from django.dispatch import receiver


@receiver(user_signed_up, dispatch)
def user_created(sender, **kwargs):
    if kwargs["created"]:
        user = kwargs["instance"]
        send_mail(
            subject="Welcome Greetings",
            message="Welcome to my Store. Explore the store and enjoy",
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[user.email],
            fail_silently=False
        )


post_save.connect(receiver=user_created, sender=User)
