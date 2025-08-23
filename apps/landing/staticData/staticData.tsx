import FarmMergerPreview from "@/public/farmmerger-preview.png"
import FarmMergerCharacter from "@/public/farmmerger-character.png"

import SpaceBacCapsule from "@/public/projects/space-bac/capsule.png"
import SpaceBacHeader from "@/public/projects/space-bac/header.png"
import SpaceBacLogo from "@/public/projects/space-bac/logo.png"
import SpaceBacCharacter from "@/public/spacebac-character.png"

export default {
    projects: [
        {
            name: "Space Bac",
            id: "space-bac",
            poster: SpaceBacCapsule,
            header: SpaceBacHeader,
            logo: SpaceBacLogo,
            character: SpaceBacCharacter,
            description: `
                Bounce, blast, and defy gravity in a fascinating 2D space platformer.
Collect stars, leap across drifting asteroids, and dodge deadly black holes as you hunt for special fuel to power your jetpack. But run out, and you’re space dust! Master the chaos of zero gravity and survive the silliest corner of the cosmos.
            `,
            screenshots: [0, 1, 2, 3, 4, 5].map(
                num => `/projects/space-bac/screenshot_${num}.png`
            ),
            steam: "https://store.steampowered.com/app/3605030/Space_Bac/",
            isMobile: false
        },
        {
            name: "Farm Merger",
            id: "farm-merger",
            poster: FarmMergerPreview,
            header: FarmMergerPreview,
            character: FarmMergerCharacter,
            description: `
               Merge adorable animals to create rarer, higher-value creatures in this addictive 2D merging farm game. With each merge, your farm grows richer, your animals get bigger, and your path to becoming the ultimate farm tycoon gets closer. Simple to play, endlessly addictive, and always rewarding — farming has never been this fun.
            `,
            screenshots: [0, 1, 2, 3].map(
                num => `/projects/farm-merger/screenshot_${num}.jpg`
            ),
            isMobile: true
        }
    ]
}