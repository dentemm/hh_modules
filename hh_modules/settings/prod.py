from .base import *

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.environ['SECRET_KEY']

import dj_database_url

DATABASES = { 'default': dj_database_url.config() }

STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'
