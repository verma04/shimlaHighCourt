var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { AuthenticationError, UserInputError } = require('apollo-server');
const Post = require('../../models/Post');
const checkAuth = require('../../util/checkAuth');
module.exports = {
    Mutation: {
        createComment(_, { postId, body }, context) {
            return __awaiter(this, void 0, void 0, function* () {
                const { username } = checkAuth(context);
                // make sure the comment isn't empty
                if (body.trim() === '') {
                    throw new UserInputError('Empty comment', {
                        errors: {
                            body: 'Comment body must not be empty',
                        },
                    });
                }
                const post = yield Post.findById(postId);
                if (post) {
                    post.comments.unshift({
                        body,
                        username,
                        createdAt: new Date().toISOString(),
                    });
                    yield post.save();
                    return post;
                }
                // post doesn't exist
                throw new UserInputError('Post not found');
            });
        },
        deleteComment(_, { postId, commentId }, context) {
            return __awaiter(this, void 0, void 0, function* () {
                // make sure user is logged in and grab their username
                const { username } = checkAuth(context);
                const post = yield Post.findById(postId);
                if (post) {
                    const commentIndex = post.comments.findIndex((c) => c.id === commentId);
                    // make sure the comment belongs to the user who's trying to delete it
                    if (post.comments[commentIndex].username === username) {
                        post.comments.splice(commentIndex, 1);
                        yield post.save();
                        return post;
                    }
                    // it's NOT the owner of the post
                    throw new AuthenticationError('Action not allowed');
                }
                // post doesn't exist
                throw new UserInputError('Post not found');
            });
        },
    },
};
//# sourceMappingURL=comments.js.map