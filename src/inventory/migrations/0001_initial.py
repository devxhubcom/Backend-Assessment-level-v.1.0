# Generated by Django 3.2 on 2022-08-24 00:31

import django.core.validators
import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category_title', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='FileUp',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('file', models.FileField(upload_to='inventory/file')),
            ],
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('price', models.DecimalField(decimal_places=2, max_digits=8,
                                              validators=[django.core.validators.MinValueValidator(1)])),
                ('image', models.ImageField(upload_to='inventory')),
                ('manufactured_date', models.DateField()),
                ('expire_date', models.DateField()),
                ('quantity', models.PositiveIntegerField()),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='inventory.category')),
            ],
        ),
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('customer_name', models.CharField(max_length=255)),
                ('quantity', models.PositiveSmallIntegerField()),
                ('order_date', models.DateField(auto_now_add=True)),
                ('status', models.CharField(
                    choices=[('pending', 'Pending'), ('decline', 'Decline'), ('deliveried', 'Deliveried')],
                    default='pending', max_length=10)),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='orderitems',
                                              to='inventory.product')),
            ],
        ),
    ]
