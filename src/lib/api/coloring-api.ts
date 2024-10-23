/**
 * API wrapper for the Coloring Pages Design service
 */

export interface ColoringPageResponse {
  imageUrl: string;
  status: string;
  id: string;
  isImageSafe: boolean;
}

export class ColoringPagesAPI {
  private readonly baseUrl: string;
  private readonly apiKey: string;

  constructor(apiKey: string, config?: { baseUrl?: string }) {
    if (!apiKey) {
      throw new Error('API key is required');
    }
    this.apiKey = apiKey;
    this.baseUrl = config?.baseUrl || 'https://www.coloringpagesdesign.com';
  }

  /**
   * Creates a new coloring page
   * @param subject The subject of the coloring page
   * @param style The style of the artwork ('figurine', 'pixel-art', 'anime')
   * @param complexity The complexity level ('easy', 'hard')
   * @param visibility The visibility setting ('public', 'private')
   * @returns Promise containing the response with image URL and status
   */
  async createColoringPage(
    subject: string,
    style: string,
    complexity: string,
    visibility: string
  ): Promise<ColoringPageResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/create-coloring-page`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`
        },
        body: JSON.stringify({
          subject,
          style,
          complexity,
          visibility
        }),
      });

      if (!response.ok) {
        const error: any = new Error(`HTTP error! status: ${response.status}`);
        error.status = response.status;
        throw error;
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error creating coloring page:', error);
      throw error;
    }
  }
}

export default ColoringPagesAPI;
