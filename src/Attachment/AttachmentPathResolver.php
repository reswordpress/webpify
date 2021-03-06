<?php declare(strict_types=1); # -*- coding: utf-8 -*-

namespace WebPify\Attachment;

/**
 * @package WebPify\Attachment
 */
class AttachmentPathResolver
{

    const TYPE_DIR = 'basedir';
    const TYPE_URL = 'baseurl';

    private $meta = [];

    private $uploadsDir = [];

    /**
     * @param array $attachmentMeta
     */
    public function __construct(array $attachmentMeta)
    {
        $this->meta = $attachmentMeta;
        $this->uploadsDir = wp_get_upload_dir();
    }

    /**
     * @param array $attachmentMeta
     *
     * @return AttachmentPathResolver
     */
    public static function forMeta(array $attachmentMeta): AttachmentPathResolver
    {
        return new static($attachmentMeta);
    }

    /**
     * Returns the full path for an attachment.
     *
     * @param string $size
     *
     * @return string
     */
    public function withDir(string $size): string
    {
        return $this->resolve($size, self::TYPE_DIR);
    }

    /**
     * @param string $size
     * @param string $type
     *
     * @return string full path/url to file
     */
    public function resolve(string $size, string $type): string
    {
        if (! isset($this->uploadsDir[$type])) {
            return '';
        }

        // the full is always required either for..
        // ... returning the full
        // ... or getting the sub-dir for a specific size.
        if (! isset($this->meta['file'])) {
            return '';
        }

        $full = $this->meta['file'];
        $dir = trailingslashit($this->uploadsDir[$type]);

        if ($size === 'full') {
            return $dir.$full;
        } elseif (isset($this->meta['sizes'][$size]['file'])) {
            $dir .= trailingslashit(_wp_get_attachment_relative_path($full));

            return $dir.$this->meta['sizes'][$size]['file'];
        }

        return '';
    }

    /**
     * Returns the full URL for to an attachment.
     *
     * @param string $size
     *
     * @return string
     */
    public function withUrl(string $size): string
    {
        return $this->resolve($size, self::TYPE_URL);
    }
}
