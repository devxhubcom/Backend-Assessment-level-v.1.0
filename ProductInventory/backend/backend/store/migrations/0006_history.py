# Generated by Django 3.2 on 2022-08-24 03:32

import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0005_alter_product_category'),
    ]

    operations = [
        migrations.CreateModel(
            name='History',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('quantity', models.IntegerField(validators=[django.core.validators.MinValueValidator(1)])),
                ('history_type', models.CharField(choices=[('I', 'IN'), ('O', 'OUT')], max_length=1)),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='store.product')),
            ],
        ),
    ]
