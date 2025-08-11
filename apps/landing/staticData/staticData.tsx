import SpaceBacPreview from "@/public/spacebac-preview.png"
import FarmMergerPreview from "@/public/farmmerger-preview.png"
import SpaceBacCharacter from "@/public/spacebac-character.png"
import FarmMergerCharacter from "@/public/farmmerger-character.png"

export default {
    projects: [
        {
            name: "Space Bac",
            id: "space-bac",
            poster: SpaceBacPreview,
            description: `
                Bounce, blast, and defy gravity in a fascinating 2D space platformer.
Collect stars, leap across drifting asteroids, and dodge deadly black holes as you hunt for special fuel to power your jetpack. But run out, and you’re space dust! Master the chaos of zero gravity and survive the silliest corner of the cosmos.
            `,
            character: SpaceBacCharacter,
            screenshots: [0, 1, 2, 3, 4, 5].map(
                num => `/projects/space-bac/screenshot_${num}.png`
            ),
            isMobile: false
        },
        {
            name: "Farm Merger",
            id: "farm-merger",
            poster: FarmMergerPreview,
            description: `
               Merge adorable animals to create rarer, higher-value creatures in this addictive 2D merging farm game. With each merge, your farm grows richer, your animals get bigger, and your path to becoming the ultimate farm tycoon gets closer. Simple to play, endlessly addictive, and always rewarding — farming has never been this fun.
            `,
            character: FarmMergerCharacter,
            screenshots: [0, 1, 2, 3].map(
                num => `/projects/farm-merger/screenshot_${num}.jpg`
            ),
            isMobile: true
        }
    ]
}